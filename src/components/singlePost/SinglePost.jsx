import React from 'react';
import './singlePost.css';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className='singlePostImg'
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Abdul</b></span>
                    <span className="singlePostDate">1 Hour Ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, consequatur at excepturi natus atque, nisi facere aliquid animi eos, dolore enim iusto officia ex nemo ut odit veritatis voluptates explicabo! Qui ab soluta, perferendis fugiat suscipit eveniet maxime eum, ex deleniti eos, fuga consequuntur voluptas accusamus ad corporis. Officia, ad.
                <br/>
                <br/>
                at excepturi natus atque, nisi facere aliquid animi eos, dolore enim iusto officia ex nemo ut odit veritatis voluptates explicabo! Qui ab soluta, perferendis fugiat suscipit eveniet maxime eum, ex deleniti eos, fuga consequuntur voluptas accusamus ad corporis. Officia, ad.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;