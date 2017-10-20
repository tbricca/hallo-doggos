import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

const confident = "Your dog is a leader and self-proclaimed alpha of the pack! They do not and will not hesitate at any situation that may arise. They may be a bit stubborn at times, but don’t worry aren’t we all a little stubborn. The best part about your dog is that they’ll always be there to protect you from evil. Your dog may be dominant but deep down they are there to protect you from harm's way. Do not fear, your dog is here!"
const confResult = "result: The confident, courage, and bold dog";
const adaptable = "Your dog is your best moral support! They love to comfort, cuddle, and straight up be there for you. They are super personable with everything and everyone, rarely will you find them not get along with another person or animal. They love to please you and make you happy! Bonus, they are great listeners, so don’t worry because they’ll always be there for you. "
const adaptResult = "result: The adaptable, helpful, and supportive dog";
const independent = "Your dog may be a little reserved at times, but don’t mistaken that as a weakness. Your dog is very independent and doesn’t mind the fact they aren’t the center of attention. Their independence may be perceived as shyness, but truthfully your dog just doesn’t care."
const indResult = "result: Independent, strong, and fearless dog";
const shy = "Your dog may be a bit shy, but they are complete sweethearts once they are comfortable. They are quite sensitive to their surrounding and can easily be overwhelmed. Your dog may be timid, but love and support can boost their confidence level. They loved to be held since it gives them a sense of security and protection."
const shyResult = "result: Shy, nervous, and timid dog";
const happy = "Your dog is a social butterfly! They love making new friends and instantly brings a positive energy to any room. They typically get along with everyone they meet, they’re easily excited with an endless amount of energy. They don’t mind being the center of attention, also loves to play anywhere and anything. Since they are so social, this also makes them very curious. They love going on adventures and exploring new surroundings they’re unfamiliar with."
const happyResult = "result: Happy, social and enthusiastic dog";

//confident
const one = [
  {"url":"/confident/lion.jpg", 'cost': 14.99, 'title': 'Lion Costume', 'desc': 'This ferocious yet adorably fluffy lion’s mane is perfect for any stubborn dogs that don’t always enjoy wearing a full outfit. Who doesn’t want to be the owner of a lion dog! The headpiece is very light yet voluminous so the statement is loud and clear. This piece is easy to put on and enclosed with an elastic band so it won’t move around. The ears are sewn on top with cotton stuffing.'},
  {"url":"/confident/turtle.jpg", 'cost': 14.99, 'title': 'Teenage Mutant Ninja Turtle - Raphael Costume ', 'desc': '“Names Raph. If theres a brawl, count me in. Now’s the chance to have your very own Ninja Turtle! Raphael is described to be the one with the loudest attitude of the Ninja Turtles. This fearsome costume will protect you from all the villains that come out during this spooky time of the year. This is a three-piece outfit, it includes: the jumpsuit, turtle shell, and headpiece. The fabric is very light and provides enough wiggle room so your dog can easily move around. The jumpsuit has an adjustable strap and all other components are attached with velcro.'},
  {"url":"/confident/superman.jpg", 'cost': 15.99, 'title': 'Superman Costume', 'desc': 'Do you ever feel like your dog is secretly Clark Kent who protects the world from evil. Now there’s a perfect costume that fits their personality! This amazing Superman costume is not only iconic but it’ll instantly instill fear into anyone that comes their way. This costume is one piece that ties around like a collar, the shirt and cape are attached as one. There is the infamous “S” located on the chest, also on the cape!'},
  {"url":"/confident/darth.jpg", 'cost': 19.99, 'title': 'Darth Vader', 'desc': 'This is the perfect chance to dress your dog up as one of the most notorious villains! There are three pieces included: a cape, headpiece, and bodysuit. For the bodysuit, there is an adjustable belt that would fasten under their tummy. The cape is attached to the shoulder of the bodysuit with velcro.'}
]

//adaptable
const two = [
  {"url":"/adaptable/basket.jpg", 'cost': 25.99, 'title': 'Doggy Picnic  Basket Costume', 'desc': 'This adorable doggy picnic basket will have everyone wanting their very own dog in a basket! The inspiration was drawn from Wizard of Oz where Dorothy and Toto was the dynamic duo. Now you can have your very own Toto, they will always be there for you on your halloween adventures. This basket costume is one solid piece, there is a safety and secure loop and hook belly strap so your basket won’t tip over!'},
  {"url":"/adaptable/butterfly.jpg", 'cost': 15.99, 'title': 'Butterfly Costume', 'desc': 'Transform your adorable dog into a majestic butterfly with this adorable butterfly costume! This outfit comes with a headpiece and 19 inches wings made with plush. The headpiece will come with the antennae already sewn in and include a velcro closure. The wings are easy to put on as well, you just have to loop the straps around your dog’s front legs.'},
  {"url":"/adaptable/banana.jpg", 'cost': 15.99, 'title': 'Banana Costume', 'desc': 'Have you ever wanted to dress your pup as a walking banana, here’s your chance to dress them up as the infamous Chiquita Banana. This banana suit is one piece is a show stopper and a great statement piece that’ll catch everyone’s attention. The banana suit has a velcro lining to fasten and ensure the banana doesn’t shift.'},
  {"url":"/adaptable/taco.jpg", 'cost': 9.99, 'title': 'Taco Costume', 'desc': 'If you and your dog share the same obsession with tacos, here’s your chance show it! Taco-dog is the newest trending costume that’s always a classic hit. This costume comes with two pieces, the taco suit and a sombrero hat. The taco suit will include all of the toppings such as sour cream, cheese, and pico de gallo.'}

]
//independent
const three = [
  {"url":"/independent/yoda.jpg", 'cost': 13.99, 'title': 'Yoda Costume', 'desc': 'Patience you must have my young padawan. This awesome Yoda costume will be the envy of everyone at dog parks, parties, etc! Your dog is one of the smartest and wisest there is, why not get them a Yoda costume that fits their unique personality. This outfit includes two separates, a headpiece and iconic tan cloak. The headpiece and cloak are both attachable by velcro. The arm opening will be wide enough, allowing their front legs to go through.'},
  {"url":"/independent/santa.jpg", 'cost': 7.99, 'title': 'Naughty Snowman Costume', 'desc': 'Do you have a quirky dog who loves being mischievous, now you can dress them up with a fun naughty snowman sweater to fit their quirky personality! This adorable sweater is easy to slip on and extremely soft and comfortable! This sweater features a comical image of a printed snowman on the back. It’ll also be great for those cold nights where an extra layer of knit will keep them cozy and warm.'},
  {"url":"/independent/shark.jpg", 'cost': 25.99, 'title': 'Shark Costume', 'desc': 'We all know that sharks are the most feared creatures of the sea! Now you can have your every own shark dog to inject fear into everyone that comes your way. This costume in particular is a hammer shark, but don’t be taken away by it’s funnily-shaped head, a hammer shark is not something you should poke fun at. This awesome costume is two pieces that includes a headpiece and a bodysuit. All pieces are secured by an adjustable belt and bucket.'}
  {"url":"/independent/dino.jpg", 'cost': 32.99, 'title': 'Dinosaur Costume', 'desc': 'Dinosaurs maybe extinct, but dino-pups are here to stay! Transform your dog into one of the most feared creatures on the planet. This is a great costume for any events, everyone will be able to hear them stomping from a mile away. This costume features two pieces: a headpiece and bodysuit. The bodysuit has an adjustable belt that wraps under the belly with four sleeves for their legs. There is a hook and loop closure for the headpiece to ensure it’ll stay in place.'}
]
//shy
const four = [
  {"url":"/shy/waldo.jpg", 'cost': 19.99, 'title': 'Waldo Costume', 'desc': 'Remember Where’s Waldo, did you know Waldo actually had a dog as well! This is a fun costume everyone loves! If your dog enjoys hiding from anything and everything, here’s your chance to help spot him with the iconic red and white Waldo strips! This outfit comes with two pieces, a hat and Waldo shirt. The glasses will be attached to the hat and secured with an adjustable neck strap. The shirt will be easy to slip on and off.'},
  {"url":"/shy/underdog.jpg", 'cost': 15.99, 'title': 'Underdog Costume', 'desc': 'Get in the Halloween spirit with your very own Underdog, now you and your sidekick can team up and take on Halloween as a pack! This is a two-piece costume including a blue cape and red shirt with the letter “U” enlarged in black. The cape is easy to put on, you can easily tie it to the front. The cape will also come with the letter “U” enlarged in white on the back. Now you and your underdog can fight crime and collect all the treats.'},
  {"url":"/shy/ginger.jpg", 'cost': 19.99, 'title': 'Gingerbread Costume', 'desc': 'This gingerbread pup costume is not only delicious but will have your friends and family wanting their very own gingerpup! This costume comes with a hoodie and front-leg openings attached. The red front bow will be attached to the main costume. There is “frosting piping” details covering the whole outfit. The gingerpup costume will have two arms sewn on to the side, these arms will be stuffed with cotton for a fluffy appearance.'}
  {"url":"/shy/spider.jpg", 'cost': 34.99, 'title': 'Spider Costume', 'desc': 'If your dog enjoys being a creepy crawler in the background, here’s the perfect opportunity to dress them up as a spider! This frightening outfit will give everyone the shivers. The costume consists of two pieces: the headpiece and spider suit. The spider suit has a velcro that fastens around their chest with eight creepy legs sewn onto the body. The headpiece has a velcro lining to secure it in place as well.'}
]
//happy
const five = [
  {"url":"/happy/ups.jpg", 'cost': 15.99, 'title': 'UPS Costume', 'desc': 'This hilarious UPS costume will be an instant hit at any functions! With it’s iconic brown uniform, rest assured your package will always arrive on time. This costume will include a hat and shirt piece. The UPS visor has a comfortable elastic chin strap. The brown uniform will have arm openings wide enough for their front legs. It’s easy to slip on and has a velcro lining around the neck. The square package is roughly 3.5 inches when assembled and is attached to the stuff arms sewn on the front.'},
  {"url":"/happy/minion.jpg", 'cost': 19.99, 'title': 'Minion Costume', 'desc': 'You can now have your very own lil’ minion pup! This is one of our all-time favorite halloween costume everyone loves to share with their friends and family. There are two main components included with your purchase: minion headpiece with goggles and the doggy “denim” jumpsuit. The headpiece will come with two slits for their ears. The jumpsuit itself is one solid piece, with two front-leg openings. There will be hind-leg pieces included, you’re able to easily slide them on or off! '},
  {"url":"/happy/teddy.jpg", 'cost': 25.99, 'title': 'Teddy Bear Costume', 'desc': 'This precious teddy bear costume is perfect for all dogs. Who wouldn’t want to dress their dog up as an adorable bear. Everyone will be asking you if they can cuddle up with your teddy bear. This charming costume comes with a headpiece and front suit. Both headpiece and suit are have velcro lining sewn on, this will make it easy to dress them up quickly. It comes with ears and teddy bear arms sewn on and stuffed with cotton for a cuddly and fluffy feel. '}
  {"url":"/happy/elf.jpg", 'cost': 19.99, 'title': 'Elf Costume', 'desc': 'Here’s your chance to dress your dog up as one of Santa’s most cheerful helper. With this costume, you can have your very own elf prancing around spreading the Christmas spirit. This costume is two pieces that includes the elf’s hat and elf suit. There is an elastic strap on the hat so you’re able to secure it under your dog’s chin. The elf suit has arms holding a bone sewn in stuff with cotton.'}
]
//all
const all = [
  {"url":"/happy/ups.jpg", 'cost': 15.99, 'title': 'UPS Costume', 'desc': 'This hilarious UPS costume will be an instant hit at any functions! With it’s iconic brown uniform, rest assured your package will always arrive on time. This costume will include a hat and shirt piece. The UPS visor has a comfortable elastic chin strap. The brown uniform will have arm openings wide enough for their front legs. It’s easy to slip on and has a velcro lining around the neck. The square package is roughly 3.5 inches when assembled and is attached to the stuff arms sewn on the front.'},
  {"url":"/happy/minion.jpg", 'cost': 19.99, 'title': 'Minion Costume', 'desc': 'You can now have your very own lil’ minion pup! This is one of our all-time favorite halloween costume everyone loves to share with their friends and family. There are two main components included with your purchase: minion headpiece with goggles and the doggy “denim” jumpsuit. The headpiece will come with two slits for their ears. The jumpsuit itself is one solid piece, with two front-leg openings. There will be hind-leg pieces included, you’re able to easily slide them on or off! '},
  {"url":"/happy/teddy.jpg", 'cost': 25.99, 'title': 'Teddy Bear Costume', 'desc': 'This precious teddy bear costume is perfect for all dogs. Who wouldn’t want to dress their dog up as an adorable bear. Everyone will be asking you if they can cuddle up with your teddy bear. This charming costume comes with a headpiece and front suit. Both headpiece and suit are have velcro lining sewn on, this will make it easy to dress them up quickly. It comes with ears and teddy bear arms sewn on and stuffed with cotton for a cuddly and fluffy feel. '}
  {"url":"/happy/elf.jpg", 'cost': 19.99, 'title': 'Elf Costume', 'desc': 'Here’s your chance to dress your dog up as one of Santa’s most cheerful helper. With this costume, you can have your very own elf prancing around spreading the Christmas spirit. This costume is two pieces that includes the elf’s hat and elf suit. There is an elastic strap on the hat so you’re able to secure it under your dog’s chin. The elf suit has arms holding a bone sewn in stuff with cotton.'},
  {"url":"/shy/waldo.jpg", 'cost': 19.99, 'title': 'Waldo Costume', 'desc': 'Remember Where’s Waldo, did you know Waldo actually had a dog as well! This is a fun costume everyone loves! If your dog enjoys hiding from anything and everything, here’s your chance to help spot him with the iconic red and white Waldo strips! This outfit comes with two pieces, a hat and Waldo shirt. The glasses will be attached to the hat and secured with an adjustable neck strap. The shirt will be easy to slip on and off.'},
  {"url":"/shy/underdog.jpg", 'cost': 15.99, 'title': 'Underdog Costume', 'desc': 'Get in the Halloween spirit with your very own Underdog, now you and your sidekick can team up and take on Halloween as a pack! This is a two-piece costume including a blue cape and red shirt with the letter “U” enlarged in black. The cape is easy to put on, you can easily tie it to the front. The cape will also come with the letter “U” enlarged in white on the back. Now you and your underdog can fight crime and collect all the treats.'},
  {"url":"/shy/ginger.jpg", 'cost': 19.99, 'title': 'Gingerbread Costume', 'desc': 'This gingerbread pup costume is not only delicious but will have your friends and family wanting their very own gingerpup! This costume comes with a hoodie and front-leg openings attached. The red front bow will be attached to the main costume. There is “frosting piping” details covering the whole outfit. The gingerpup costume will have two arms sewn on to the side, these arms will be stuffed with cotton for a fluffy appearance.'}
  {"url":"/shy/spider.jpg", 'cost': 34.99, 'title': 'Spider Costume', 'desc': 'If your dog enjoys being a creepy crawler in the background, here’s the perfect opportunity to dress them up as a spider! This frightening outfit will give everyone the shivers. The costume consists of two pieces: the headpiece and spider suit. The spider suit has a velcro that fastens around their chest with eight creepy legs sewn onto the body. The headpiece has a velcro lining to secure it in place as well.'},
  {"url":"/independent/yoda.jpg", 'cost': 13.99, 'title': 'Yoda Costume', 'desc': 'Patience you must have my young padawan. This awesome Yoda costume will be the envy of everyone at dog parks, parties, etc! Your dog is one of the smartest and wisest there is, why not get them a Yoda costume that fits their unique personality. This outfit includes two separates, a headpiece and iconic tan cloak. The headpiece and cloak are both attachable by velcro. The arm opening will be wide enough, allowing their front legs to go through.'},
  {"url":"/independent/santa.jpg", 'cost': 7.99, 'title': 'Naughty Snowman Costume', 'desc': 'Do you have a quirky dog who loves being mischievous, now you can dress them up with a fun naughty snowman sweater to fit their quirky personality! This adorable sweater is easy to slip on and extremely soft and comfortable! This sweater features a comical image of a printed snowman on the back. It’ll also be great for those cold nights where an extra layer of knit will keep them cozy and warm.'},
  {"url":"/independent/shark.jpg", 'cost': 25.99, 'title': 'Shark Costume', 'desc': 'We all know that sharks are the most feared creatures of the sea! Now you can have your every own shark dog to inject fear into everyone that comes your way. This costume in particular is a hammer shark, but don’t be taken away by it’s funnily-shaped head, a hammer shark is not something you should poke fun at. This awesome costume is two pieces that includes a headpiece and a bodysuit. All pieces are secured by an adjustable belt and bucket.'}
  {"url":"/independent/dino.jpg", 'cost': 32.99, 'title': 'Dinosaur Costume', 'desc': 'Dinosaurs maybe extinct, but dino-pups are here to stay! Transform your dog into one of the most feared creatures on the planet. This is a great costume for any events, everyone will be able to hear them stomping from a mile away. This costume features two pieces: a headpiece and bodysuit. The bodysuit has an adjustable belt that wraps under the belly with four sleeves for their legs. There is a hook and loop closure for the headpiece to ensure it’ll stay in place.'},
  {"url":"/adaptable/basket.jpg", 'cost': 25.99, 'title': 'Doggy Picnic  Basket Costume', 'desc': 'This adorable doggy picnic basket will have everyone wanting their very own dog in a basket! The inspiration was drawn from Wizard of Oz where Dorothy and Toto was the dynamic duo. Now you can have your very own Toto, they will always be there for you on your halloween adventures. This basket costume is one solid piece, there is a safety and secure loop and hook belly strap so your basket won’t tip over!'},
  {"url":"/adaptable/butterfly.jpg", 'cost': 15.99, 'title': 'Butterfly Costume', 'desc': 'Transform your adorable dog into a majestic butterfly with this adorable butterfly costume! This outfit comes with a headpiece and 19 inches wings made with plush. The headpiece will come with the antennae already sewn in and include a velcro closure. The wings are easy to put on as well, you just have to loop the straps around your dog’s front legs.'},
  {"url":"/adaptable/banana.jpg", 'cost': 15.99, 'title': 'Banana Costume', 'desc': 'Have you ever wanted to dress your pup as a walking banana, here’s your chance to dress them up as the infamous Chiquita Banana. This banana suit is one piece is a show stopper and a great statement piece that’ll catch everyone’s attention. The banana suit has a velcro lining to fasten and ensure the banana doesn’t shift.'},
  {"url":"/adaptable/taco.jpg", 'cost': 9.99, 'title': 'Taco Costume', 'desc': 'If you and your dog share the same obsession with tacos, here’s your chance show it! Taco-dog is the newest trending costume that’s always a classic hit. This costume comes with two pieces, the taco suit and a sombrero hat. The taco suit will include all of the toppings such as sour cream, cheese, and pico de gallo.'},
  {"url":"/confident/lion.jpg", 'cost': 14.99, 'title': 'Lion Costume', 'desc': 'This ferocious yet adorably fluffy lion’s mane is perfect for any stubborn dogs that don’t always enjoy wearing a full outfit. Who doesn’t want to be the owner of a lion dog! The headpiece is very light yet voluminous so the statement is loud and clear. This piece is easy to put on and enclosed with an elastic band so it won’t move around. The ears are sewn on top with cotton stuffing.'},
  {"url":"/confident/turtle.jpg", 'cost': 14.99, 'title': 'Teenage Mutant Ninja Turtle - Raphael Costume ', 'desc': '“Names Raph. If theres a brawl, count me in. Now’s the chance to have your very own Ninja Turtle! Raphael is described to be the one with the loudest attitude of the Ninja Turtles. This fearsome costume will protect you from all the villains that come out during this spooky time of the year. This is a three-piece outfit, it includes: the jumpsuit, turtle shell, and headpiece. The fabric is very light and provides enough wiggle room so your dog can easily move around. The jumpsuit has an adjustable strap and all other components are attached with velcro.'},
  {"url":"/confident/superman.jpg", 'cost': 15.99, 'title': 'Superman Costume', 'desc': 'Do you ever feel like your dog is secretly Clark Kent who protects the world from evil. Now there’s a perfect costume that fits their personality! This amazing Superman costume is not only iconic but it’ll instantly instill fear into anyone that comes their way. This costume is one piece that ties around like a collar, the shirt and cape are attached as one. There is the infamous “S” located on the chest, also on the cape!'},
  {"url":"/confident/darth.jpg", 'cost': 19.99, 'title': 'Darth Vader', 'desc': 'This is the perfect chance to dress your dog up as one of the most notorious villains! There are three pieces included: a cape, headpiece, and bodysuit. For the bodysuit, there is an adjustable belt that would fasten under their tummy. The cape is attached to the shoulder of the bodysuit with velcro.'}
  ]

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winner:'',
            redo: false,
            buy: false,
            personalityDesc: '',
            personalityResult: '',
            retake:false,
            quantity: 1
        }
        this.handleRedo = this.handleRedo.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
        this.handleRetake = this.handleRetake.bind(this);
        this.minus = this.minus.bind(this);
        this.plus = this.plus.bind(this);
    }
    handleRedo(e){
      e.preventDefault()
      let newResult = this.state.winner;
      this.props.transferFinalResult(newResult)
      this.redoWinner();
      this.setState({
        redo:true
      })
    }
    handleBuy(e){
      e.preventDefault()
      let newResult = this.state.winner;
      this.props.transferFinalResult(newResult);
      this.props.transferQuantity(this.state.quantity);
      this.setState({
        buy:true
      })
    }
    handleRetake(e){
      e.preventDefault()
      this.setState({
        retake: true
      })
    }
    plus(e){
      e.preventDefault()
        let amount = this.state.quantity
        if(amount < 10){
          amount++
        }
        this.setState({
          quantity: amount
        })
    }
    minus(e){
      e.preventDefault()
        let amount = this.state.quantity
        if(amount >= 1){
          amount--
        }
        this.setState({
          quantity: amount
        })
    }
    componentDidMount() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      let personality = '';
      let result = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner];
        personality = confident;
        result = confResult;
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner];
        personality = adaptable;
        result = adaptResult;
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner];
        personality = independent;
        result = indResult;
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner];
        personality = shy;
        result = shyResult;
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner];
        personality = happy;
        result = happyResult;
      }else{
        winnerObject = all[randomWinner];
        personality = confident;
        result = confResult;
      }
      this.setState({
        winner:winnerObject,
        personalityDesc: personality,
        personalityResult: result
      })
    }
    redoWinner() {
      let quizResult = this.props.quizResult;
      let randomWinner =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
      let winnerObject = '';
      let personality = '';
      if(quizResult === "one"){
        winnerObject = one[randomWinner];
        personality = confident;
      }else if(quizResult === "two"){
        winnerObject = two[randomWinner];
        personality = adaptable;
      }else if(quizResult === "three"){
        winnerObject = three[randomWinner];
        personality = independent;
      }else if(quizResult === "four"){
        winnerObject = four[randomWinner];
        personality = shy;
      }else if(quizResult === "five"){
        winnerObject = five[randomWinner];
        personality = happy;
      }else{
        winnerObject = all[randomWinner];
        personality = confident;
      }
      this.setState({
        winner:winnerObject,
        personalityDesc: personality
      })
    }

    render() {
      const{buy} = this.state;
        if(buy){
          return <Redirect to ='/confirmation'/>
        }
      const{retake} = this.state;
        if(retake){
          return <Redirect to ='/'/>
        }
        let title = this.state.winner.title
      return (
        <div className="result container-fluid">
        <div className="row">
          <h1 className="col-md-12 text-center resultDog">{this.props.dogName} {this.state.personalityResult} </h1>
        </div>
        <div className="row">
          <h2 className="col-md-12 winnerTitle"> {title} </h2>
        </div>
        <div className="row">
          <img className="col-md-4 column1" alt="winner" src={this.state.winner.url} />
          <div className="col-md-4 column2">
            <h4>Item Description</h4>
            <p className="desc">"{this.state.winner.desc}" </p>
            <p> Size: (sizing guide)</p>
            <ul className="list-inline">
              <li className="size list-inline-item active">XS</li>
              <li className="size list-inline-item"> S </li>
              <li className="size list-inline-item"> M </li>
              <li className="size list-inline-item"> L </li>
            </ul>
            <div className="input-group input-group-sm quantity">
              <p> Price: {this.state.winner.cost}.00 </p>
              <span className="input-group-btn">
                <button onClick={(e) => this.minus(e)} type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                <span><i className="fa fa-minus" aria-hidden="true"></i></span>
                </button>
                </span>
                <input type="text" name="quant[1]" className="form-control input-number" value={this.state.quantity} min="1" max="10"/>
                <span className="input-group-btn">
                <button onClick={(e) => this.plus(e)} type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                    <span> <i className="fa fa-plus" aria-hidden="true"></i></span>
                  </button>
              </span>
            </div>
            <button className="button1" onClick={(e) => this.handleBuy(e)}>Buy it</button>
            <button className="button2"> Save </button>
          </div>
          <div className="col-md-4 column3">
            <h4>Personality Description</h4>
            <p className="personDesc">"{this.state.personalityDesc}"</p>
            <button className="button1" onClick={(e) => this.handleRedo(e)}>Show Another</button>
            <button className="button2" onClick={(e) => this.handleRetake(e)}>Retake Quiz</button>
          </div>
        </div>

        </div>
      );
    }
}

export default Result;
