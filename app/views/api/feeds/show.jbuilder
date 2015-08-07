json.extract! @feed, :id, :title, :url

json.full_entries(@entries) do |entry|
  json.(entry, :id, :title, :link)
end
