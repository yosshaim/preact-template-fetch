import { h, render,Component } from 'preact';
export default class Fetch extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            data: [],
            isLoading: true
        }
    }
  
    componentDidMount() {
       
       var host=location.host
        fetch(`//${host}/ajaxPage?jspName=${this.props.url}`).then((response)=>{
			return response.json()
		}).then((data)=>{
            console.log(data)
			this.setState({data:data,isLoading:false})
		}).catch((err)=>{
            console.log(err)
            this.setState({isLoading:false})
        })


       
       
    }
    render(){
        const {data, isLoading} = this.state;
       
    
        if(isLoading){
          return <p>טוען ...</p>
        }
    
        return (
          <ul className={this.props.containerClassName}>
            {data.map(item =>
              <li key={item.id}>
                <figure>
                    <a href={item.url}><img src={item.pic}/></a>
                    <figcaption>
                        <a href={item.url}>
                            <strong>{item.title}</strong>
                            <small>{item.subtitle}</small>
                        </a>
                    </figcaption>
                </figure>
              </li>
            )}
          </ul>
        );
    }
}
 