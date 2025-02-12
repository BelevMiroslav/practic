export const campaigns = {
    data: function() {
        return {
        parent:"",
        }
    },
    mounted : function(){
        this.parent = this.$parent.$parent;
    
        if(!this.parent.user){
            this.parent.logout();
        }
    },
    methods: {
        handleLogout() {
            this.parent.logout(); // Додаємо кнопку для виходу
        }
    },
    template: `
        <div>
            <h1>Campaigns</h1>
            <button @click="handleLogout">Logout</button>
        </div>
    `
};