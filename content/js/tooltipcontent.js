(function(root){
	var toolTipContent = {
		servername: '<p>This dropdown is populated from the server names you added to the config file.</p>',
		databasename: '<p>All the databases found in the server selected above.</p>',
		collectionname: '<p>In relational databases, this refers to the table you can connect to for pulling data. In document oriented databases, this refers to the collection.</p><div class="alert-box secondary">Drata doesn\'t have the ability to join on multiple collections. You will have to de-normalize your data incase your collection has foriegn key reference. Sorry pal!</div>',
		selectionsInfo : ['<p>Selection is the property that you select for visualization.<br />',
			'Depending on the type of chart and aggregations, your selections end ',
			'up together as one visualization or seperated out in a chart</p>'
		].join(''),
		aggregationFunction : '<p>Specifies the aggregate function to be applied on your selection. This is essential to visualize aggregations. Options include <em>value, count, sum, min and max</em>. By default <em>value</em> is selected which means that there is no aggregate function. The other options pretty much self implies their purpose.</p>',
		selectionProperty: '<p> A list of properties are shown in the dropdown. For schema less datasources, drata might not be able to find all the properties, since that requires a full scan of the collection. In such cases, you will have to type the name manually. <br /> "<span class="icon-plus"></span>" converts the selection into a compound selection, which lets you apply arithmetic operation on 2 or more properties. </p>',
		percentChange: '<p>When checked, percent change is calculated between the current value of your selection and the previous value of that selection.  </p>',
		xaxis: '<p>The x-axis can be any numeric or date property. <br />You cannot have string/varchar property because it doesn\'t make sense :-) <br />For added convenience, you can see that x-axis property type dropdown supports "currency", which just means that the chart will show x-axis formatted as currency, for all other purposes it is treated as number. <br />When a property type is selected, the textbox dropdown combo filters the properties based on their type. <br />You may specify a property that is not in the dropdown, because it is possible that drata doesn\'t show all the properties of your collection. This happens with schema-less/document based datasources like MongoDb, it is impossible to keep track of all the properties of all the items in a collection. <br /> However in Ms Sql server, drata will be able to find all the properties of the table being visualized.</p>',
		splitby: '<p>This is technically a "groupby", but rather than aggregating selections, this will split the results into separate components in chart. <br />So if you are visualizing the number of checkouts per hour, you may split this by "region", which will show you the trend in number of checkouts per region.</p>',
		interval: '<p>If the type of property is of type numeric, you should specify a numeric interval to perform aggregation upon.<br />If the type of property is of type date, the interval format would be in hours, minutes, seconds, days, month, quarter, year.<br />If the property is of type string , no interval is required.</p> <h6>Formatting the date intervals:</h6> <p>h => hour, m => minute, s => second, w => week, d => day<br /></p><h6>Examples:</h6><p>1h2m => 1 hour + 2 minutes<br />1d2h3m => 1 day + 2 hours + 3 minutes.<br />You may also select <em>quarter, year, month</em>.<br />These three intervals are static, you can\'t add numbers to them. <br />For example, You can\'t do <em>2quarter, 2year, 2month.</em></p>',
		groupby: '<p><em>Groupby</em> groups the results by the property you select in conjunction with the aggregate functions specified in the <span style="font-weight:bold">Selections</span> above.<br /> You may group results by string, numeric, or date property.<br /> For date property, you have to select a date interval. <br />For numeric property, you have to enter a numeric value for interval. <br />Check out the "Interval" help for further explanation about choosing intervals. </p><div class="alert-box secondary"> If you need to group by a numeric value of type "enum" or an Identifier, Ex: UserTypeId, you can treat it as a string, by selecting "string" in the dropdown. This way, drata will treat the property as string and will not need an interval.</div>',
		groupby2: '<p><em>groupby level 2</em>, as the name specifies, is the second level aggregation applied within the result groups made by the intial <em>Groupby</em>.<br /> Same rules apply for selecting intervals. <br />Although it is a perfectly valid usecase to have more than 2 levels of <em>groupby</em>, for simplicity, drata allows only 2 levels of aggregation for now. <br />If you have a need to apply more deeper aggregations, you can restrict charts with conditions to exclude a certain group, and build another chart with that excluded group.</p>',
		dateproperty: '<p>the main date property that you use to filter out results. This can be the date created or any other date property that will be used as a top level filter. <br /> You may specify this date as part of <span style="font-weight:bold">Conditions</span> as well.</p>',
		slidingInterval: '<p>When selected, you will see a slider and a dropdown. The dropdown signifies whether the interval being set is of type <em>minute, hours, months or years.</em>, while you can use the slider to set a range.<br /> This functionality set a dynamic interval which will cause the results to change over time.</p>',
		staticInterval: '<p>A static interval that does not change over time.</p>',
		dataFilterExpression: '<p>This expression is dynamically generated based on the interval you selected.</p>',
		conditionValue: '<p>The dropdown specifies whether the value you entered should be treated as <em>numeric, boolean, string or date.</em> The dropdown value gets preselected whenever you select a property against which the condition is set. You can always override the default type in the dropdown.</p>',
		complexCondition: '<p>"<span class="icon-plus"></span>" Converts a simple condition for example <em>(a > b)</em> into a complex condition for example <em> (a > b or (c < d && e = f))</em>.<br /> This allows you to group conditions. </p>',
		conditionSummary: '<p>This summary is a sql representation of conditions you build. It is generated dynamically as you build the conditions</p>',
		groupbycondition: '<p>These conditions will be applied after the data is grouped. This can be viewed as a "having clause" in sql queries. <br /> In an effort to keep this simple, drata only lets simple conditions, and no nesting conditions is allowed. <br /> Every condition here corresponds to your selections, and only applied on that corresponding selection. <br /> This is very usefull to filter out unwanted data being visualized as a result of "GroupBy" which cannot be filtered otherwise using ordinary conditions.</p>'
	}

	root.drata.ns('nsx').extend({
		toolTipContent: toolTipContent
	})
})(this);