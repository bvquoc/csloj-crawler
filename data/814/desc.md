**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIV (PHÚ THỌ 2018)</center>**
<br>

Công ty điện lực XYZ có nhiệm vụ cung cấp điện cho thành phố VT. Để cung cấp điện cho thành phố công ty đã cho lắp đặt một hệ thống gồm ~n~ cột điện được đánh số theo thứ tự từ ~1~ đến ~n~, cột điện thứ ~i~ có chiều cao là một số nguyên dương ~h_i~, các dây điện được nối giữa các cột liền kề, tức là nối từ cột ~1~ đến cột ~2~, từ cột ~2~ đến cột ~3~,…., từ cột ~n-1~ đến cột ~n~.
Vì mỹ quan đô thị, thành phố VT đã đưa ra quy định sẽ thu của công ty XYZ một khoản chi phí cho hai cột điện liền kề ~i~ và ~i+1~ là ~c_i×|h_i-h_{i+1}|~ (~c~ là giá chi phí cho mỗi đơn vị chênh lệch chiều cao giữa ~2~ cột điện liền kề), tổng chi phí là

~~S=∑_{i=1}^{n-1}c_i×|h_i-h_{i+1}|~~

Đồng thời, thành phố cũng yêu cầu ~2~ cột điện cạnh nhau có chênh lệch không được phép vượt quá ~d~.

Để giảm thiểu chi phí, lãnh đạo công ty đã quyết định chọn giải pháp cho lắp đặt nâng chiều cao một số cột điện. Tuy nhiên, nếu cột điện ~i~ nâng chiều cao thêm ~x~ (đơn vị) thì công ty phải mất một khoản chi phí là ~x^2~.

**Yêu cầu**: Cho biết ~n,d~, các hệ số ~c_i\  (1≤i<n)~ và các chiều cao ~h_i\ (i=1..n)~, bạn hãy giúp công ty XYZ tính chi phí ~S~ thấp nhất khi công ty thực hiện theo giải pháp của lãnh đạo công ty.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n,d\ (n≤4000,d≤4000)~;
- Dòng thứ hai chứa ~n-1~ số nguyên dương ~c_1,c_2,…,c_{n-1}\  (c_i≤10^4)~;
- Dòng thứ ba chứa ~n~ số nguyên dương ~h_1,h_2,…,h_n\  (h_i≤4000)~. 

Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên là chi phí thấp nhất mà công ty XYZ phải trả.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
2 2 2 2
2 3 5 1 4
```

#### Dữ liệu ra:
```
15
```

#### Giải thích:
- Nâng cột ~1~ thêm ~1~, nâng cột ~4~ thêm ~2~. Khi đó chiều cao các cột lần lượt là: ~3,3,5,3,4~. Tổng chi phí là: ~2×(0+2+2+1)+1^2+2^2=15~.

## Giới hạn:
- Có ~25\%~ số test ứng với ~25\%~ số điểm có ~n\le 10, h_i\le 3~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm có ~n\le 400, h_i\le 200~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm có ~n\le 400, h_i\le 4000~;
- Có ~25\%~ số test còn lại ứng với ~25\%~ số điểm có ~n\le 4000, h_i\le 4000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)