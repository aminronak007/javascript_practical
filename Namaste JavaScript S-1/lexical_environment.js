var b = 10;
function a() {
  c();
  function c() {
    d();
    function d() {
      console.log(b);
    }
  }
}

a();
