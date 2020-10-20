@tops.each do |top|
    json.set! top.id do
        json.partial! 'api/tops/top', top: top
    end
end


