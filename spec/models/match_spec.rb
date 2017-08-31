require 'rails_helper'

RSpec.describe Match, type: :model do

  it 'persists into the database when we seed a profile' do
  expect{ create_match }.to change(Match, :count)
  end
end

def create_match
  Match.create(name: 'Eoin', age: 62, gender: 'male', profile_pic: "https://i.vimeocdn.com/portrait/6253049_300x300")
end
