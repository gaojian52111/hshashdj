var MathUtility;

MathUtility=cc.Class({
    extends: cc.Component,
    	/// <summary>
		/// 计算两点的距离
		/// </summary>
		/// <param name="p1"></param>
		/// <param name="p2"></param>
		/// <returns></returns>
        GetDistance:function(PointP1,PointP2){
			
            var dx = Math.abs(PointP1.x - PointP2.x);
			var dy = Math.abs(PointP1.y - PointP2.y);
			return Math.sqrt(dx * dx + dy * dy);
        },
        /// <summary>
		/// 计算两点的角度
		/// </summary>
		/// <param name="p1"></param>
		/// <param name="p2"></param>
		/// <returns></returns>
        GetAngle:function(PointP1,PointP2,use360=false){
            var dx = PointP2.y - PointP1.y;
			var dy = PointP2.x - PointP1.x;

			var r = Math.atan2(dy, dx) * (180 / Math.PI);

			if (use360)
			{
				r += 360;
				r %= 360;
				r = 360 - r + 90;
				r = r % 360;
			}
			return r;
        },
        		/// <summary>
		/// 根据一个点,角度和长度计算最终的位置
		/// </summary>
		/// <param name="p"></param>
		/// <param name="angle"></param>
		/// <param name="distance"></param>
		/// <returns></returns>
         GetPosition:function(PointP,angle,distance){
            var a = angle / (180 / Math.PI);
			var cx = distance * Math.cos(a);
			var cy = distance * Math.sin(a);

			return  cc.p(PointP.x + cx, PointP.y + cy);
         },	
});
module.exports = MathUtility;