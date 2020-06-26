import React, { Component } from 'react';
import _ from 'lodash';
import {toast} from 'react-toastify';
import config from '../../config.json'
import { updatePost } from './../../services/postService';
class EditPost extends Component {
    state = {
        _id: '',
        postDate: '',
        postTitle: '',
        postImageUrl: '', 
        postContent: '',
        postTags: [],
        postLike: ''
    }
    componentDidMount() {
        const { post } = this.props.location;

        if(!post) return this.props.history.push('/admin/allposts')

        this.setState({
            _id: post._id,
            postDate: post.postDate,
            postTitle: post.postTitle,
            postImageUrl: post.postImageUrl, 
            postContent: post.postContent,
            postTags: post.postTags,
            postLike: post.postLike
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        try{
            const result = await updatePost(
                JSON.parse(JSON.stringify(this.state))
            );
            if(result.status === 200){
                toast.success('پست ویرایش شد');
                this.props.history.push('/admin/allposts');
            }
        }catch(e){
            if(e.response && e.response.status === 400){
                toast.error('لطفا کلیه موارد را پر کنید');
            }
        }
    }

    render() { 
        return (
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label" htmlFor="txtTitle">
                    عنوان پست
                </label>
                <input
                    id="txtTitle"
                    name="postTitle"
                    type="text"
                    placeholder="عنوان"
                    className="form-control input-md m-2"
                    value={this.state.postTitle}
                    onChange={e => this.setState({ postTitle: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="postImageUrl"
                    type="text"
                    placeholder="لینک عکس (الزامی نیست)"
                    className="form-control input-md m-2"
                    value={this.state.postImageUrl}
                    onChange={e =>
                        this.setState({ postImageUrl: e.target.value })
                    }
                />

                <textarea
                    name="postContent"
                    className="form-control m-2"
                    rows="5"
                    placeholder="متن پست"
                    value={this.state.postContent}
                    onChange={e =>
                        this.setState({ postContent: e.target.value })
                    }
                />

                <label className="col-md-4 control-label" htmlFor="txtTags">
                    برچسب ها
                </label>

                <input
                    id="txtTags"
                    name="postTags"
                    type="text"
                    placeholder="برچسب را با (,) از هم جدا کنید"
                    className="form-control input-md m-2"
                    value={this.state.postTags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                />

                <button className="btn btn-success m-5">ویرایش پست </button>
            </form>
        );
    }
}
 
export default EditPost;