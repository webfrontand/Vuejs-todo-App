Vue.component('cmp', {
	props: ['todo'],
	data: function(){
		return {
			isEdit: false
		}
	},
	template: '<div><span v-on:click="clicked" v-show="!isEdit">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="isEdit" /></div>',
	methods: {
		clicked: function(){
			this.isEdit = true;
		},
		saved: function(){
			this.isEdit = false;
		}
	}
})


new Vue({
	el: "#app",
	data: {
		message: "hello world",
		showTodos: true,
		todoText: "",
		todos: [
			{ title: 'Study Hard nodejs' },
			{ title: 'Study Hard expressjs' },
			{ title: 'Study Hard angularjs' },
			{ title: 'Study Hard vuejs' },
			{ title: 'Study Hard reactjs' }
		]
	},
	methods: {
		createTodo: function(){
			var todo = {
				title: this.todoText
			}
			this.todos.push(todo);
			this.todoText = "";
		},
		removeTodo: function(index){
			this.todos.splice(index, 1);
		}
	}
})