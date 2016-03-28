ActiveRecord::Base.transaction do
  Bench.destroy_all
  Bench.create(num_seats: 5, lat:40.727530, lng:-73.942698, description:"Home Bench")
  Bench.create(num_seats: 4, lat:40.725024, lng:-73.996792, description:"Work Bench")
  Bench.create(num_seats: 4, lat:40.730820, lng:-73.997549, description:"Park Bench")
end
