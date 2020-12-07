json.extract! item, :id, :price, :size, :description
  begin
    json.photo_url asset_path("items/#{item.photo_url}")
  rescue
    json.photo_url item.photo_url
  end
json.options item.optionsArray
