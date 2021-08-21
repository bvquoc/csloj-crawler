**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<br>

Sau bao đêm thâu thức trắng luyện code, sau chuỗi ngày dài luyện với giáo sư, sau những buổi no nê trà sữa, cuối cùng ngày thi học sinh giỏi quốc gia cũng thực sự đến rồi...
Như khâu chuẩn bị cuối cùng cho ngày trọng đại, đội tuyển HSG Tin học thị trấn Mù Căng Chải quyết định đi xem bói, nhờ thầy bói chỉ giúp cách bố trí chỗ ngồi cho hợp phong thủy. Sau khi xem số mệnh của từng người, thầy bói phán những điều sau đây:

- ~N~ thí sinh của trường thuộc một trong ba mệnh: **Thủy, Mộc** và **Hỏa**.
- Các thí sinh cùng một mệnh thì phải ngồi chung phòng
- Có ~M~ cặp thí sinh xung khắc. Hai thí sinh ở mọi cặp đều không cùng mệnh.
- Hai thí sinh xung nhau thì không được ngồi chung phòng.

Do điều kiện cơ sở vật chất thiếu thốn, trường THPT chuyên thị trấn Mù Căng Chải chỉ có hai phòng để tổ chức thi học sinh giỏi tin học. Bởi thế, đôi lúc việc đáp ứng đủ mọi nhu cầu của thầy bói là bất khả thi. Nhà trường buộc phải đuổi một số thí sinh ra khỏi đội tuyển, để các thí sinh còn lại có thể xếp vào hai phòng mà tránh gặp xui xẻo.
Bạn hãy giúp nhà trường loại đi ít thí sinh nhất, sao cho các thí sinh không bị loại có thể xếp vào hai phòng thỏa mãn mọi yêu cầu của thầy bói.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên ~N~ ~(1 ≤ N ≤ 50)~ là số thí sinh trong đội tuyển.
- Dòng thứ hai chứa xâu gồm ~N~ kí tự thể hiện mệnh của ~N~ thí sinh (~R~ đại diện cho **Hỏa**, ~G~ đại diện cho **Mộc** và ~B~ đại diện cho **Thủy**).
- Dòng thứ ba chứa số nguyên ~M~ ~(0 ≤ M ≤ 1000)~ là số cặp thí sinh xung khắc.
- ~M~ dòng còn lại, mỗi dòng gồm hai số nguyên ~x~ và ~y~ ~(1 ≤ x, y ≤ N)~ thể hiện một cặp thí sinh xung khắc. Hai thí sinh ~x~ và ~y~ không cùng mệnh với nhau.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa số thí sinh ít nhất cần bị loại bỏ.

## Giới hạn:
- Trong ~30\%~ số test có ~N ≤ 15~.

## Ví dụ:
#### Dữ liệu vào:
```
3
RGB
3
1 2
1 3
2 3
```

#### Dữ liệu ra:
```
1
```

#### Dữ liệu vào:
```
3
RRR
0
```

#### Dữ liệu ra:
```
0
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)