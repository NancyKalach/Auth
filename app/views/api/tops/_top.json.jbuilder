json.extract! top, :id, :price, :size, :description
    begin
      json.photo_url asset_path("tops/#{top.photo_url}")
    rescue
      json.photo_url top.photo_url
end
