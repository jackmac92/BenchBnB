class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true
  has_many :reviews
  def avg_rating
    sum = (reviews.map{ |r| r.rating.to_i }.inject(:+))
    return nil unless sum
    sum/ reviews.count
  end
  def self.in_bounds(bounds)
    return nil unless bounds
    lat_range = bounds[:southWest][:lat]..bounds[:northEast][:lat]
    lng_range = bounds[:southWest][:lng]..bounds[:northEast][:lng]
    Bench.where(lat: lat_range).where(lng: lng_range)
  end

  def self.filtered_by(filters)
    return nil unless filters
    filters[:min_seats] ||= 1
    filters[:max_seats] ||= 100
    seating_filter = filters[:min_seats].to_i..filters[:max_seats].to_i
    self.in_bounds(filters[:bounds]).where(num_seats: seating_filter)
  end
end
