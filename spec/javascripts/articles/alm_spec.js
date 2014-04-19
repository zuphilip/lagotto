//= require d3
//= require jquery
//= require helpers/jasmine-fixture
//= require articles/alm

describe("articles alm", function() {

  beforeEach(function() {
    affix('h1#api_key[data-api_key="12345"]')
  });

  it("should work for objects", function() {
    var foo = {
      a: 12,
      b: 34
    };
    var bar = {
      a: 12,
      b: 34
    };
    expect(foo).toEqual(bar);
  });

  it("builds correct query string", function() {
    expect(query).toBeNull();
  });
});

// describe('AlmViz', function () {
//     var div,
//         chart,
//         data = [
//             {x: 0, y: 0},
//             {x: 1, y: 3},
//             {x: 2, y: 6}
//         ];

//     beforeEach(function () {
//         div = d3.select('body').append('div');
//         chart = AlmViz(div);
//     });

//     afterEach(function () {
//         div.remove();
//     });

//     describe('.data', function () {
//         it('should allow setting and retrieve chart data', function () {
//             expect(chart.data(data).data()).toBe(data);
//         });
// });
// });
