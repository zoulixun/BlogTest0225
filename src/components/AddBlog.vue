<template>
	<div id="add-blog">
		<h2>添加博客</h2>
		<form v-if="!submited" action="">
			<label>博客标题</label>
			<input type="text" v-model="blog.title" required="">
			<label>博客内容</label>
			<textarea v-model="blog.content"></textarea>
			<div id="checkboxes">
				<label for="">Vue.js</label>
				<input name="a" type="checkbox" value="Vue.js" v-model="blog.categories" />
				<label for="">Node.js</label>
				<input name="a" type="checkbox" value="Node.js" v-model="blog.categories"/>
				<label for="">React.js</label>
				<input name="a" type="checkbox" value="React.js" v-model="blog.categories"/>
				<label for="">Angular.js</label>
				<input name="a" type="checkbox" value="Angular.js" v-model="blog.categories"/>
			</div>
			<label>作者:</label>
			<select v-model="blog.author">
				<option v-for="author in authors">
					{{author}}
				</option>			
			</select>
			<button v-on:click.prevent="post">添加博客</button>
		</form>	
		<div v-if="submited">
			<h3>发布成功</h3>
			<router-link to="/"><h3>返回首页</h3></router-link>
		</div>
	<hr>
	<div id="preview">
		<h3>博客总览</h3>
		<p>博客标题:{{blog.title}}</p>
		<p>博客内容:</p>
		<p>{{blog.content}}</p>
		<p>博客分类:</p>
		<ul>
			<li v-for="category in blog.categories">
				{{category}}
			</li>
		</ul>
		<p>作者: {{blog.author}}</p>
	</div>			

	</div>
</template>
<script>
	import axios from '../axios-auth.js'
export default { 
	//http://jsonplaceholder.typicode.com/
	//http://jsonplaceholder.typicode.com/posts
  name: 'add-bolg',
  data(){
	  return {
		 blog:{
			 title:"",
			 content:"",
			 categories:[],
			 author:""
		 },
		  authors:["Hemiah","Bucky","James"],
		  submited:false
	  }
  },
  methods:{
	  post:function(){
		  //this.$http.post("https://wd4168068279tyatty.wilddogio.com/posts.json",this.blog)
			axios.post("/posts.json",this.blog)
				.then((data) =>{
					console.log(data);
					this.submited = true;
				})
	  }
  }
}
</script>
<style scoped>
#add-blog *{
box-sizing: border-box;		
}
#add-blog{
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],textarea,select{
	display: block;
	width: 100%;
	padding: 8px;
}
textarea{
	height: 200px;
}
#checkboxes label{
	display: inline-block;
	margin-top: 0;
}
#checkboxes input{
	display: inline-block;
	margin-right: 10px;
}
button{
	display: block;
	margin: 20px 0;
	background: crimson;
	color: $fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	font-size: 18px;
	cursor: pointer;
}
#preview{
	padding:10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3{
	margin-top: 10px;
}
</style>