**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Nông dân John (FJ) lại chuyển đến một nơi mới. Anh ta muốn tìm một vị trí để xây dựng nông trại của mình sao cho cực tiểu hóa khoảng cách con đường đi hàng ngày.

Trong khu vực mà FJ chuẩn bị chuyển đến có ~N~ vị trí ~(1≤N≤10^4)~ được nối với nhau bằng ~M~ con đường đi hai chiều ~(1≤M≤5×10^4)~. Mỗi con đường nối trực tiếp hai vị trí nào đó. Hệ thống giao thông đảm bảo sự đi lại lẫn nhau giữa các vị trí. ~K~ vị trí trong vùng có siêu thị ~(1≤K≤5)~ mà FJ phải đi đến hàng ngày. Chính xác hơn, mỗi ngày FJ xuất phát từ nông trang của mình đi đến ~K~ vị trí trong vùng có siêu thị và quay trở lại nông trang. FJ có thể đi đến các siêu thị theo một thứ tự tùy ý. Khi chọn vị trí để làm nông trang, FJ muốn chọn trong số ~N-K~ vị trí không có siêu thị vì giá đất ở các vị trí này thấp hơn.

Hãy giúp FJ chọn vị trí xây dựng nông trang sao cho quãng đường anh ta phải đi hàng ngày là nhỏ nhất có thể theo phương án di chuyển tối ưu từ trang trại của mình.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên dương ~N, M~ và ~K~;
- ~K~ dòng tiếp theo, mỗi dòng liệt kê một vị trí có siêu thị;
- ~M~ dòng cuối, mỗi dòng mô tả một con đường gồm ~3~ số ~u, v, L~ thể hiện có đường nối vị trí ~u~ với vị trí ~v~ có chiều dài ~L~.

## Dữ liệu ra:
- Ghi ra một số nguyên là khoảng cách nhỏ nhất mà hàng ngày FJ thực hiện nếu như anh ta chọn được vị trí tối ưu để xây nông trang.

## Ví dụ:
#### Dữ liệu vào:
```
5 6 3
1
2
3
1 2 1
1 5 2
3 2 3
3 4 5
4 2 7
4 5 10
```

#### Dữ liệu ra:
```
12
```

#### Giải thích:
- FJ xây nông trang tại vị trí ~5~ và hành trình tối ưu hàng ngày của anh ta là: ~5-1-2-3-2-1-5~ (có tổng khoảng cách là ~12~).
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)