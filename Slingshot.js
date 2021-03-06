class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 5
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

  
    display(){
        
    	push();
    	if(this.sling.bodyA){
    		var pointA = this.sling.bodyA.position;
    	    var pointB = this.pointB;
    		strokeWeight(4);
    		stroke("green");
    		line(pointA.x, pointA.y, pointB.x, pointB.y);
    	}
        else{
            textSize(18);
            fill(255);
            text("Press space to reattach the ball", 200, 50);
        }
    	pop();
    }
    
}