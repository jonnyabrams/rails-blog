
User.create(email: "bob@bob.com", password: "password", password_confirmation: "password")

10.times do |x|
  Post.create(title: "Title #{x}", body: "Body #{x} Words go here", user_id: User.first.id)
end