class Bench < ActiveRecord::Base
  validates :lat, :lng, :description, presence: true
  def self.in_bounds(bounds)
    return nil unless bounds
    lat_range = bounds[:southWest][:lat]..bounds[:northEast][:lat]
    lng_range = bounds[:southWest][:lng]..bounds[:northEast][:lng]
    Bench.where(lat: lat_range).where(lng: lng_range)
  end
end
