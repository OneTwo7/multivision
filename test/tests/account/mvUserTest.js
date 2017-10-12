describe('mvUser', function () {
  beforeEach(module('app'));

  describe('isAdmin', function () {
    it('should return false if the user does not have the role admin', inject(function (mvUser) {
      var user = new mvUser();
      user.roles = ['not admin'];
      expect(user.isAdmin()).to.be.falsey;
    }));
    it('should return true if the user has the role admin', inject(function (mvUser) {
      var user = new mvUser();
      user.roles = ['admin'];
      expect(user.isAdmin()).to.be.true;
    }));
  });
});