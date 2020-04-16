import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import axios from 'axios';

var itemss = {};
var posts = [];
class items extends React.Component {

    state = {
        itemsArray: [],
        items: {}
    }

    async componentWillMount() {
        // let itemss = {}
        try {
            const response = await axios.get('https://api.walmartlabs.com/v1/search?&apiKey=vng9pukufs97mcyyjs5ps266&query=BELT&format=json');              itemss = response.data;    
            this.setState({items: itemss})                     
        } catch(err) {
            console.error(err);
        }
        // return {posts:posts.splice(0,10)}; 
        this.renderItems()               
    }        
    
    renderItems() {       
        for ( var i = 0; i < 46; i++) {
            if (i === 20){
                this.renderPosts(); 
            }else{
                // console.log(items.items[i])
                // posts.push({"itemId": items.items[i].itemId, "parentItemId": items.items[i].parentItemId, "name": items.items[i].name, "salePrice": items.items[i].salePrice, "shortDescription": items.items[i].shortDescription, "largeImage": items.items[i].largeImage, "productUrl": items.items[i].productUrl, "customerRating": items.items[i].customerRating})
                // this.renderItems();
                // console.log(posts)         
            }
        }
               
    }
    // renderItems(itemArray) {
    //     // console.log([itemArray])
    //     console.log("THIS IS POSTS :", itemArray)
    //     // return itemArray.map((post) => {
    //     //     console.log(post)
    //     //     return (
    //     //         <li>{post.name}</li>
    //     //     )
    //     // })
    // }

    renderPosts() {       
        // console.log(posts[0].name)
        // return posts.map((post) => {
        //     console.log(post[0])
        //     return (
        //         <li>{post[0].name}</li>
        //     )
        // })
        {/* {posts.map(post => (
                    <div key={post.itemId}>
                        <img alt={post.name} width="80" height="100" className="img-fluid" src={post.largeImage == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : post.largeImage} />
                        <p><b>Item Name             :</b> {post.name}</p>
                        <b>Price         :</b> ${post.salePrice}
                    </div>

                ))} */}
    }

    // renderPosts(posts) {
    //     console.log("THIS IS POSTS :", posts)
    //     return posts.map((post) => {
    //         console.log(post)
    //         return (
    //             <li>{post.title}</li>
    //         )
    //     })
    // }

    render() {
        return (
            <div>
                <h1>This are the items</h1>
            </div>
        )
    }

   
}

export default items