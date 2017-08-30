class Game

  attr_reader :health, :wealth
  DEFAULT_HEALTH = 60
  DEFAULT_WEALTH = 60
  STANDARD_INCREMENT = 10

  def initialize(health = DEFAULT_HEALTH , wealth = DEFAULT_WEALTH)
    @health = health
    @wealth = wealth
  end

  def gift
    add_health
    minus_wealth
  end

  def date
    add_health(30)
    minus_wealth(20)
  end

  def work
    add_wealth
  end

  def win?
  return true  if @health >= 100
  false
  end

  def lose?
  return true  if @health <= 0
  false
  end

  def add_health(amount = STANDARD_INCREMENT)
    @health += amount
  end

  def add_wealth(amount = STANDARD_INCREMENT)
    @wealth += amount
  end

  def minus_health(amount = STANDARD_INCREMENT)
    @health -= amount
  end

  def minus_wealth(amount = STANDARD_INCREMENT)
    @wealth -= amount
  end

end
