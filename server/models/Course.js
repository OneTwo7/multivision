var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: { type: String, required: '{PATH} is required!' },
  featured: { type: Boolean, required: '{PATH} is required!' },
  published: { type: Date, required: '{PATH} is required!' },
  tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses () {
  Course.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      [
        {title: 'JavaScript for Cave People', featured: true, published: new Date(2017, 9, 9), tags: ['JavaScript', 'programming']},
        {title: 'JavaScript for Moon People', featured: true, published: new Date(2017, 7, 19), tags: ['JavaScript', 'programming']},
        {title: 'C# for Sharp Folks', featured: false, published: new Date(2017, 7, 12), tags: ['C#', 'programming']},
        {title: 'How to Program in Sleep', featured: true, published: new Date(2017, 6, 31), tags: ['misc', 'programming']},
        {title: 'Ruby for Those Who Still Care', featured: true, published: new Date(2017, 9, 2), tags: ['Ruby', 'programming']},
        {title: 'Python for Cobras', featured: false, published: new Date(2017, 6, 22), tags: ['Python', 'programming']},
        {title: 'C++ Fundamentals', featured: true, published: new Date(2017, 9, 2), tags: ['C++', 'programming']},
        {title: 'C++ Comprehensive', featured: true, published: new Date(2017, 8, 16), tags: ['C++', 'programming']},
        {title: 'C++ Advanced Topics', featured: false, published: new Date(2017, 8, 16), tags: ['C++', 'programming']},
        {title: 'C++ Ultimate', featured: false, published: new Date(2017, 9, 1), tags: ['C++', 'programming']},
        {title: 'EcmaScript 6', featured: true, published: new Date(2017, 9, 1), tags: ['JavaScript', 'programming', 'spec']},
        {title: 'Node.js in Action', featured: true, published: new Date(2017, 6, 31), tags: ['Node.js', 'programming']},
        {title: 'Node.js in Waiting Mode', featured: true, published: new Date(2017, 7, 22), tags: ['Node.js', 'programming']},
        {title: 'Ajax and How Not To', featured: true, published: new Date(2017, 9, 5), tags: ['Ajax', 'programming']},
        {title: 'Go for Everyone and That Other Dude', featured: false, published: new Date(2017, 6, 25), tags: ['Go', 'programming']}
      ].forEach(function (course) {
        Course.create({
          title: course.title,
          featured: course.featured,
          published: course.published,
          tags: course.tags
        });
      });
    }
  });
}

exports.createDefaultCourses = createDefaultCourses;