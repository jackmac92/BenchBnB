ActiveRecord::Base.transaction do
  Bench.destroy_all
  Bench.create(lat:40.727530, lng:-73.942698, description:"Home Bench")
  Bench.create(lat:40.725024, lng:-73.996792, description:"Work Bench")
  Bench.create(lat:40.730820, lng:-73.997549, description:"Park Bench")
end
