**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<br>

Từ lâu vương quốc ~X~ đã có lòng tham, muốn chiếm trọn vương quốc ~Y~ làm lãnh thổ của mình. Nay nhờ có lãnh chúa ~Z~ mà ý đồ của vương quốc sắp trở thành hiện thực!
Vương quốc ~Y~, giống như mọi vương quốc khác, có hình dạng là một khu vực hình chữ nhật. Ta có thể chia vương quốc thành ~R~ hàng và ~C~ cột, mỗi ô ~\left(i, j\right)~ sẽ tượng trưng cho một tỉnh của vương quốc.
Lãnh chúa ~Z~ đã cho quân bí mật xâm chiếm ~N~ tỉnh quan trọng của vương quốc ~Y~. Việc chiếm trọn cả vương quốc giờ chỉ còn là lần lượt chiếm đóng nốt các tỉnh còn lại. Dở chứng kiêu ngạo, Lãnh chúa ~Z~ muốn thị uy quyền lực ra thế giới, yêu cầu các quan của mình tìm một cách lần lượt chiếm đóng các tỉnh còn lại sao cho số lần tất cả các tỉnh được chiếm tạo thành hình chữ nhật là nhiều nhất có thể. Đơn giản vì khi đó, các tỉnh đã chiếm sẽ có hình dạng của một vương quốc!
Các quan lóng ngóng mãi mới tìm ra một phương án cho Lãnh chúa của mình, trong khi Lãnh chúa, với khả năng toán học siêu cấp, đã tính ra số cách để chọn thỏa mãn yêu cầu bản thân. Còn bạn thì sao?

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số ~R~ và ~C~ là số hàng và cột của vương quốc ~Y~.
- Dòng tiếp theo gồm số ~N~ là số lượng các tỉnh đã chiếm đóng.
- ~N~ dòng tiếp theo, mỗi dòng gồm ~2~ số ~x_i~ và ~y_i~ – thể hiện vị trí một tỉnh đã chiếm đóng. Dữ liệu đảm bảo ~N~ tỉnh đôi một khác nhau.

## Dữ liệu ra:
- Một dòng duy nhất ghi số cách chọn lần lượt các tỉnh để chiếm đóng thỏa mãn yêu cầu của Lãnh chúa. Vì số này rất lớn, bạn chỉ cần in ra phần dư của nó khi chia cho ~1000000007~.

## Giới hạn:
- ~1 ≤ R, C ≤ 3000; 0 ≤ N ≤ min\left(R×C , 10^5\right); 1 ≤ x_i ≤ R,  1 ≤ y_i ≤ C~
- Trong ~1/6~ số test có ~2~ tỉnh ở vị trí ~\left(1, 1\right) \text{ và }\left(R, C\right)~ đã bị chiếm.
- Trong ~1/3~ số test có ~R ≤ 50 \text{ và }C ≤ 50~.

## Ví dụ:
#### Dữ liệu vào:
```
2 3
2
1 2
2 2
```

#### Dữ liệu ra:
```
8
```

#### Dữ liệu vào:
```
3 3
2
1 1
3 3
```

#### Dữ liệu ra:
```
5040
```

#### Giải thích:
<center><img src="/images/problems/1072/lands.svg" width=1080px></center>
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)