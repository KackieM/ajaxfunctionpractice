Templates = {};

Templates.sidebarPosts = [
	 "<% _.each(titles, function(title, index , list) { %>",
        "<li><a href=\"\"><%= title %></a></li>",
    "<% }); %>"
].join("\n");

Templates.post = [
	 "<% _.each(posts, function(post, index , list) { %>",

           "<article data-postId=\"<%= post._id %>\">",
            "<h3 class=\"postTitle\"><%= post.title %> <small><%= post.date %></small></h3>",
            "<div class=\"postContent\">",
                   "<p><%= post.content %></p>",
                "</div>",
                "<div class=\"authorPost\"><small><strong>Author:</strong></small> <%= post.author %> <span class=\"glyphicon glyphicon-pencil editPost\"></span><span class=\"glyphicon glyphicon-remove removePost\"></span> </div>",
            "</article>",
        "<% }); %>"
].join("\n");

Templates.editModal = [
	"<div class=\"modal-body\">",
      "<div class=\"form-group\">",
          "<label for=\"editPostTitle\">Edit Title</label>",
          "<input type=\"text\" class=\"form-control editPostTitle\" id=\"editPostTitle\" value=\"<%= post.title %>\">",
      "</div>",
      "<div class=\"form-group\">",
          "<label for=\"editAuthorPostForm\">Author of Post</label>",
          "<input type=\"text\" class=\"form-control editAuthorPostForm\" id=\"authorPostForm\" value=\"<%= post.author %>\">",
      "</div>",
      "<div class=\"form-group\">",
        "<label for=\"editContentForm\">Post</label>",
        "<textarea id=\"editContentForm\" class=\"form-control editContentForm\"><%= post.content %></textarea>",
        "<p class=\"help-block\">Example block-level help text here.</p>",
      "</div>",
  "</div>",
  "<div class=\"modal-footer\" data-postId=\"<%= post._id %>\">",
  	"<input id=\"editPostId\" type=\"hidden\" value=\"<%= post._id %>\">",
    "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>",
    "<button type=\"button\" class=\"btn btn-primary submitUpdatePost\">Save changes</button>",
  "</div>"
].join("\n");
