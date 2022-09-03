class Doctor < ActiveRecord::Base
    belongs_to :ailment
    has many :patients, through: :ailments

    
end