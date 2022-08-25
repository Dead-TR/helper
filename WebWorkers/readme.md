17. Использование веб-воркеров для ресурсоемких задач ЦП
Web Workers позволяет выполнять операцию сценария в фоновом потоке веб-приложения, отдельно от основного потока выполнения. Выполняя трудоемкую обработку в отдельном потоке, основной поток, которым обычно является пользовательский интерфейс, может работать без блокировки или замедления.

В том же контексте выполнения, поскольку JavaScript является однопоточным, нам потребуются параллельные вычисления. Это может быть достигнуто двумя способами. Первый вариант использует псевдопараллелизм, основанный на setTimeoutфункции. Второй вариант — использовать Web Workers.

Web Workers лучше всего работает при выполнении обширных вычислительных операций, поскольку он выполняет код, независимый от других сценариев, в отдельном потоке в фоновом режиме. Это означает, что это не влияет на производительность страницы.

Мы можем воспользоваться преимуществами Web Workers в React для выполнения сложных вычислительных задач.

Вот код без использования Web Workers:
```
// Sort Service for sort post by the number of comments 
function sort(posts) {
    for (let index = 0, len = posts.length - 1; index < len; index++) {
        for (let count = index+1; count < posts.length; count++) {
            if (posts[index].commentCount > posts[count].commentCount) {
                const temp = posts[index];
                posts[index] = users[count];
                posts[count] = temp;
            }
        }
    }
    return posts;
}

export default Posts extends React.Component{

    constructor(props){
        super(posts);
    }

    state = {
        posts: this.props.posts
    }

    doSortingByComment = () => {
        if(this.state.posts && this.state.posts.length){
            const sortedPosts = sort(this.state.posts);
            this.setState({
                posts: sortedPosts
            });
        }
    }

    render(){
        const posts = this.state.posts;
        return (
            <React.Fragment>
                <Button onClick={this.doSortingByComment}>
                    Sort By Comments
                </Button>
                <PostList posts={posts}></PostList>
            </React.Fragment>
        )
    }
}
```
Что произойдет, когда у нас будет 20 000 сообщений? Это замедлит рендеринг, поскольку sortвременная сложность метода равна O(n^2), который будет выполняться в том же потоке.

Ниже приведен модифицированный код, который использует Web Workers для обработки сортировки:

```
// sort.worker.js

// In-Place Sort function for sort post by number of comments
export default  function sort() {
    
    self.addEventListener('message', e =>{
        if (!e) return;
        let posts = e.data;
        
        for (let index = 0, len = posts.length - 1; index < len; index++) {
            for (let count = index+1; count < posts.length; count++) {
                if (posts[index].commentCount > posts[count].commentCount) {
                    const temp = posts[index];
                    posts[index] = users[count];
                    posts[count] = temp;
                }
            }
        }
        postMessage(posts);
    });
}

export default Posts extends React.Component{

    constructor(props){
        super(posts);
    }
    state = {
        posts: this.props.posts
    }
    componentDidMount() {
        this.worker = new Worker('sort.worker.js');
        
        this.worker.addEventListener('message', event => {
            const sortedPosts = event.data;
            this.setState({
                posts: sortedPosts
            })
        });
    }

    doSortingByComment = () => {
        if(this.state.posts && this.state.posts.length){
            this.worker.postMessage(this.state.posts);
        }
    }

    render(){
        const posts = this.state.posts;
        return (
            <React.Fragment>
                <Button onClick={this.doSortingByComment}>
                    Sort By Comments
                </Button>
                <PostList posts={posts}></PostList>
            </React.Fragment>
        )
    }
}
```

В этом коде мы запускаем sort метод в отдельном потоке, что гарантирует, что мы не блокируем основной поток.

Вы можете рассмотреть возможность использования Web Workers для таких задач, как обработка изображений, сортировка, фильтрация и другие задачи, требующие больших ресурсов ЦП.

Ссылка: Использование веб-воркеров ( https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers )
