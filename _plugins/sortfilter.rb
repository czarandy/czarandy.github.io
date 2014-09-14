module Jekyll
  module YearSortFilter
    def year_sort(input)
      return input.sort_by.with_index { |x, idx| [-x.data['year'], idx] }
    end
  end
end

Liquid::Template.register_filter(Jekyll::YearSortFilter)
