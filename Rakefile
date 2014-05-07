require "rubygems"
require "rake"

desc "Generate Jekyll site"
task :generate do
  puts "Generating site with Jekyll..."
  system "sass --update _sass:css/ -f"
  system "jekyll build"
end # task :generate

desc "Update Bourbon files"
task :bourbon do
  puts "Updating Bourbon files..."
  system "bourbon update --path _sass/"
end # task :bourbon

task :default => [:watch]

desc "Watch the site and regenerate when it changes"
task :watch do
  puts "Starting to watch source with Jekyll and Sass..."
  system "sass --update _sass:css/ -f -l"
  jekyllPid = Process.spawn("jekyll serve --watch")
  sassPid = Process.spawn("sass --watch _sass:css/ -l")
  system "open -a 'Google\ Chrome' 'http://localhost:4000'"

  trap("INT") {
    [jekyllPid, sassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  [jekyllPid, sassPid].each { |pid| Process.wait(pid) }
end # task :watch
