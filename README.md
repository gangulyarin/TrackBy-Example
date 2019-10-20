https://medium.com/@arindamganguly_14424/performance-optimization-in-angular-part-1-trackby-6d18a68b417a
Angular Performance Optimization. Part 1- TrackBy
There are a lot of articles on Angular Performance Optimization all over the Internet. Let me say it once more. There are a LOT of articles on Angular Performance Optimization. Really, a lot. When I started reading and learning, I found that some of these articles are comprehensible but not having a lot of information. Some of the articles are loaded with in depth knowledge but are not at all comprehensible. So, I thought putting all of them together so that it is fairly comprehensible for people who have some amount of hands on into the Angular world. 
This series of articles will mainly focus on Angular Performance and on the way we hope to learn a lot of technical concepts and tricks. Some of you will be already knowing some of these techniques. I have tried putting all of the techniques together step by step (article by article) like an algorithm. The targeted audience are people who already have an Angular Application and want to make it performance efficient and people who are on the road of building an Angular application alike.
So let’s start with the very first step.
The very first Optimization technique in Angular and the most basic and popular one which anyone might have guessed is the tackBy. 
So, In this short and basic article we will see how to get trackBy to optimize our performance for the view in Angular and also see how it is getting optimized.
Let us start by creating an Angular app.
ng new object-list
Let us open up visual studio code. We are not going to add any other component.
Open up app.component.ts and add two arrays of objects. Each object having two or more properties. I have added two arrays of objects having an id property of number and a name property. (I am adding names of all Superheroes as I am a big DC comic fan  ). 
Let us populate the first array with say 3 elements. The second array will have the same 3 elements and another one more element. And then we will have another blank array which we will use to show in the view.
supes_initial=[
    {id:1, name:"Superman"}, {id:2, name:"Batman"}, {id:3, name:"Wonder Woman"}];

supes_modified=[
  {id:1, name:"Superman"}, {id:2, name:"Batman"}, {id:3, name:"Wonder Woman"},
  {id:4, name:"Flash"}
];
supes=[];

Now let us populate the view array with the initial array in constructor and have a refresh function to populate the view array with the modified array.

  constructor(){
    this.supes=this.supes_initial;
  }

  refresh(){
    this.supes=this.supes_modified;
  }

Now we are done with this file. Let’s move on to the view. Open up the app.component.html and add an ngFor to show the supes (view) array content. Also add a Refresh button to run the refresh function to add another hero.
<ul>
  <li *ngFor="let hero of supes">
    {{hero.name}}
  </li>
</ul>
<button (click)="refresh()">Refresh</button>

As simple as that.
Run the app. Open the Developer tools in Browser and go to elements. Expand the app-root and ul_ngcontent-bde-c0 as shown below (I have used chrome).
 

Click on Refresh and keep an eye here.
All the li contents will be highlighted and a new li will be added. 
What does this highlighting means?
It means that all the contents are added once more when another item is added. But all the other items were already there. So why are they being added once more although the rest have already been there. This is because Angular has no way of differentiating between the newly added elements and the elements that were already there. This is a wastage of resource, right?
To set things right, we have to use trackBY. trackBy uses a function which tells Angular how to differentiate elements in a ngFor. So, let’s add trackBy in ngFor.
Open up app.component.html and add the modify the ngFor as follows:
<li *ngFor="let hero of supes;trackBy:recognize">

Now we need to write the recognize function. The general signature of a trackBy function is Fn(index, item) which stands for the index of the array and the object in each cell respectively. So we will follow the standard. Open up app.component.ts and add the following function:
recognize(index, item){
    return item.id;
  }

We are going to track by id.
Now run the app and open up the developers tools as explained previously and click the refresh button. You will see only the new element getting highlighted. The rest stays as it is.
 
This was a very basic but effective optimization technique. I am sure most of you are familiar with.
Thanks for reading and staying with me.
More interesting techniques are coming up in the next parts.


