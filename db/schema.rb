# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_20_115320) do

  create_table "cpus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "processor"
    t.string "socket"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pcpart_id"
  end

  create_table "hdds", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "series"
    t.string "capacity"
    t.string "speed"
    t.string "interface1"
    t.string "interface2"
    t.string "cache"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mbs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "chipset"
    t.string "formfactor"
    t.string "socket"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "pcpart_id"
  end

  create_table "memories", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "capacity"
    t.string "setnumber"
    t.string "standard"
    t.string "interface"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parts_lists", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.boolean "public_private", null: false
    t.integer "cpu_id"
    t.integer "mb_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pc_parts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pcparts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
