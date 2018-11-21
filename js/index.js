//实例化vue对象
new Vue({
	el: "#vue-index",
	data: {
		name: '米斯特吴',
		job: 'web开发',
		websit: 'http://www.baidu.com',
		websitTag:"<a href='http://www.baidu.com'>Baidu</a>"
	},
	methods:{
		//如果想拿到name,就直接对象.name就可以了，不用管data，拿方法的时候也是直接拿green就可以，不用管methods
		
		greet: function (time) {
			return 'Good ' + time + ' ' + this.name + '!';
		}
	}
});


// el: element 需要获取的元素，一定是html中的根容器元素
// data: 用于数据的存储
// methods: 用于方法的存储






























