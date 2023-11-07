let app = Vue.createApp({
    data(){
        return {
            title: 'Gamble ROY',
            balance: -1,
            info: "Place the bet by providing the amount and choosing the card",
            cards: [1,1,1],
            bet: 1,
            allow_bet: true,
            lost_all: false,
            roy_init: 100
        }
    },
    methods: {
        start(roy){
            if(roy>0){
                this.balance = roy;
            }
        },
        make_bet(card){
            if(this.allow_bet && this.bet>0 && this.balance>=this.bet){
                this.allow_bet = false;
                this.balance-=this.bet;
                let r=Math.floor(Math.random()*3);
                let m=Math.floor(Math.random()*20);
                if(m<9){
                    m=2;
                } else if(m<14){
                    m=3;
                } else if(m<18){
                    m=4;
                } else {
                    m=5;
                }
                this.cards=[0,0,0];
                this.cards[r]=m;
                if(card==r){
                    let prize = m*this.bet;
                    this.balance += prize;
                    this.info = `You win ${prize} ROY! You placed a bet on ${card+1}, and the drawn number was ${r+1} with multiplier: ${m}x`;
                } else {
                    this.info = `You lose. You placed a bet on ${card+1}, but the drawn number was ${r+1} with multiplier: ${m}x`;
                }
            }
        },
        play_again(){
            this.cards = [1,1,1];
            this.info = "Place the bet by providing the amount and choosing the card";
            this.allow_bet = true;
            if(this.balance==0){
                this.lost_all = true;
            }
        },
        reset_game(){
            this.cards = [1,1,1];
            this.info = "Place the bet by providing the amount and choosing the card";
            this.allow_bet = true;
            this.lost_all = false;
            this.balance = -1;
            this.bet = 1;
        }
    }
})
app.mount('#app');