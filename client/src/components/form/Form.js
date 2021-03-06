import React,{useState} from 'react'
import useStyles from './styles'
import {TextField,Button,Typography,paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux';
import {createPosts} from '../../actions/posts'
export default function Form() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [postData,setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''

    })
    const handleFunction = (e)=>{
        e.preventDefault();
        dispatch(createPosts(postData));

    }
    const handleSubmit = ()=>{

    }

    const clear = ()=>{

    }
    return (
        <div>
            <paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleFunction}>
                <Typography  variant="h6" >Creating a memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>
                 <div className={classes.fileInput}>
                    <FileBase
                    type='file'
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
                </div>
                <Button onClick={handleSubmit} className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth variant="contained">Submit</Button>
                <Button onClick={clear} color="secondary" size="small" type="submit" fullWidth variant="contained">Clear</Button>
                </form>
            </paper>
        </div>
    )
}
