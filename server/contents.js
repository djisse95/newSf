Meteor.methods({
/*Start content*/
	//member add content post
	addContent: function(title, content, typeid, date, image, author,category,url) {
	//var userid = Meteor.user(this._id);
	var author = Meteor.userId();
  	var attributes={
  	title:title,
		content:content,
		typeid:typeid,
		date:date,
		image:image,
		author:author,
		category:category,
		url:url
  	};
  	contents.insert(attributes);
  }
});

/*End content*/