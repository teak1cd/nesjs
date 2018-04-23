NES = ((win)=>{
  function check(obj){
    if(obj)return true;
    throw obj;
  }
  check(TileEngine);
  check(WorldEngine);
  class NES{
    constructor(parentDiv){
      this.tileEngine=new TileEngine();
      this.spriteSlots = new Array(11);
      this.world = new WorldEngine();
      this.maxWorldSize=this.world.getMaxSize();
      this.parent = parentDiv || null;
      if(this.parent===null){
        this.parent=win.document.createElement("div");
        win.document.body.appendChild(this.parent);
      }
      this.maxLayers = parseInt(this.setting("maxLayers",2));
      this.layers = new Array(this.maxLayers);
      this.maxElements=(this.maxWorldSize.x+1)*(this.maxWorldSize.y+1);
    }
    setting(name,def){
      if(this.parent.getAttribute("data-"+name))return this.parent.getAttribute("data-"+name);
      return def;
    }
  }
  return NES;
})(window)
