describe('Service: espnSports', function () {

  var sports,
      mocks,
      cache,
      $httpBackend;

  // load the controller's module
  beforeEach(module('espnAPI','espnAPIMocks'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    cache = $injector.get('espnCache');
    sports = $injector.get('espnSports');
    mocks = $injector.get('espnSportsData').defaultResponse;
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it("should", function(){ expect(sports).toBeTruthy() });

  describe('.get()', function(){
    var spyCB,
      sportsObj;
    beforeEach(function(){
      spyCB = jasmine.createSpy().andReturn(mocks);
      $httpBackend.expectJSONP(/v1\/sports\?apiKey=/).respond(spyCB);
      sportsObj = sports.get();
    });
  });
});
