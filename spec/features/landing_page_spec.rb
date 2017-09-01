
require 'rails_helper'

RSpec.feature "Instructions Page", type: :feature do
  scenario "User can can see the instrctions to the game" do
    visit ('/')
    expect(page).to have_content("Love Me Tinder the only game you should play in a relationship.")
  end
end
