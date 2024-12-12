class Drone {
    constructor(parameters) {
      this.id = parameters.id;
      this.status = "available";
      this.model = parameters.model;
      this.battery = parameters.battery;
      this.sensors = parameters.sensors;
      this.position = parameters.position;
    }
  
    fly() {
      console.log("flying");
    }
  
    land() {
      console.log("landing");
    }
  
    assign_mission(self) {
      console.log("assigning mission...");
      self.status = "on_mission";
    }
  
    complete_mission(self) {
      console.log("comple
  console.log("completing mission...");
      self.status = "available";
    }
  }
  
  ///////////////////////////////////////////
  // Partie Tests / Brouillon
  ///////////////////////////////////////////
  
  const drone = new Drone({
    id: "1",
    model: "suzuki",
    battery: 100,
    sensors: ["water", "fire"],
    position: "1,1,1",
  });
  
  console.log(drone);
  console.log();
  
  drone.fly();
  console.log();
  
  drone.assign_mission(drone);
  console.log(drone.status);
  console.log();
  console.log();
  console.log();
  console.l