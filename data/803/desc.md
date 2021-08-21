**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XII (BẮC GIANG 2016)</center>**
<br>

Khu hội chợ Đông Bắc Bắc Giang có ~m×n~ gian hàng được bố trí trong một khu hình chữ nhật kích thước ~m×n~. Các hàng của hình chữ nhật được đánh số ~1,2,3,…,m~ từ trên xuống dưới, còn các cột – đánh số ~1,2,3,…,n~ từ trái sang phải, ô nằm giao của hàng ~i~ và cột ~j~ là gian hàng ~(i,j)~ trưng bày mặt hàng ~a_{ij}~. Khách tham quan đi vào khu hội chợ từ một gian hàng bất kỳ bên trái (~i~ bất kỳ, ~j=1~) và mất ~1~ đồng, không nhất thiết phải tham quan tất cả các gian hàng, khách chỉ có thể đi ra khỏi khu hội chợ từ các gian hàng bên phải (~i~ bất kỳ, ~j=n~), tại mỗi gian hàng khách có thể di chuyển qua các gian hàng chung cạnh với nó. Khi đi vào gian hàng trưng bày mặt hàng khác với mặt hàng của gian hàng hiện tại thì khách tham quan phải mua vé giá là ~1~ đồng. 

**Yêu cầu**: Cho biết mặt hàng trưng bày tại các gian hàng, tính chi phí ít nhất mà khách tham quan phải trả khi tham quan khu hội chợ.

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số ~m,n~;
- ~m~ dòng sau, mỗi dòng chứa ~n~ số nguyên không âm, cho mã mặt hàng được trưng bày tại các gian hàng của khu hội chợ. Mã mặt hàng tại gian hàng ~(i,j)~ là ~a_{ij}~ thỏa mãn ~0≤ a_{ij}≤ 100~.
Hai số liên tiếp trên một dòng cách nhau một dấu cách. 

## Dữ liệu ra:
- Ghi ra một số duy nhất là chi phí ít nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
2 3
0 1 1
1 1 2
```

#### Dữ liệu ra:
```
1
```

## Ràng buộc:
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài có ~m,n≤ 5~;
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài có ~m,n≤ 50~;
- Có ~40\%~ số test khác ứng với ~40\%~ số điểm còn lại của bài có ~m,n≤1000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)