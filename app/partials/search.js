<div class="container-fluid">
	<div class="row-fluid navbar navbar-inverse">
		<div class="navbar-inner" ng-controller="ZipCodeFrmCtrl">
			<div class="container-fluid search-zipcode ">
				<form class="form-inline pull-left" name="zipCodeFrm" novalidate>
				  <!-- <div class="control-group"> -->
				    <label class="search-label" for="zip">Look around near : 
				    	<input type="text" name="zip" placeholder="Enter your zip code" required ng-pattern="/^\d{5,6}$/" ng-model="zipCode" class="input-medium search-query">
				    </label>
	                <button type="submit" class="btn btn-primary" value="GO" ng-disabled="zipCodeFrm.$invalid" ng-click="sendZip(zipCode)">GO</button>
				  <!-- </div> -->
				</form>
				
				        
				        	
				        <div class="modal-footer">
				            <button class="btn btn-warning cancel" ng-click="close()">Cancel</button>
				        </div>
				    </div>
				</div>
				<div ng-hide="!searchplace" class="show-searchplace">
					<h2>{{resultTitle(place)}} near {{searchplace}}</h2>
				</div>
			</div>
		</div>
	</div>
	<div class="row-fluid">
		<div class="span3 container well">
			<label class="m-bottom">
			Filter By : 
			<input type="text" ng-model="searchPlace" class="input-medium search-query">
			</label>
			<div class="bs-docs-sidebar places-container">
				<ul class="nav nav-list bs-docs-sidenav affix-top">
					<li ng-repeat="place in places | filter:searchPlace" ng-class="activeClass(place)">
						<a ng-href="{{getUrl( place.url )}}">
							<i class="icon-chevron-right"></i>
							{{place.title}}
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="span9" ng-controller="ResultsTabCtrl">
			<tabset>
				<tab heading="Map View" active="tabs.map">
					<div id="mapContainer" style="width: 100%;height:700px;" gmap data="data"></div>
				</tab>
				<tab heading="List View" active="tabs.list">
					<table class="table table-striped table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>NAME</th>
								<th>ADDRESS</th>
								<th>LOCATION</th>
							</tr>
						</thead>
						<tbody>
							<tr	id="listItem{{$index}}" ng-repeat="details in data" 
								ng-class="{active:$index==selectedMarker}" 
								ng-click="selectFromList($index)">
								<td><img ng-src="img/markers/number_{{$index+1}}.png" class="list-markers" /></td>
								<td>{{details.name}}</td>
								<td>{{details.formatted_address}}</td>
								<td>{{getLocation(details)}}</td>
							</tr>
						</tbody>
					</table>
				</tab>
			</tabset>
		</div>
	</div>
</div>
