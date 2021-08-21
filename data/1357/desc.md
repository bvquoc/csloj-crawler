**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 1- Hải Phòng 2020</center>**

Vương quốc của HP gồm ~N~ thành phố. HP là một nhà vua rất thông minh nên đã chia ~N~ thành phố thành ~M~ cụm, mỗi cụm gồm có ~K~ thành phố, một thành phố có thể nằm trong nhiều cụm. Sau đó HP yêu cầu xây tất cả các con đường nối hai thành phố bất kì trong mỗi cụm thành phố, vậy nên trong mỗi cụm sẽ có tất cả ~\frac{k(k-1)}{2}~ con đường.

Thủ đô của vương quốc là thành phố ~1~ và cũng là nơi cư ngụ của HP. HP muốn thăm một người bạn ở thành phố ~N~ và thắc mắc HP phải đi qua ít nhất bao nhiêu thành phố để đến được đó.


## Dữ liệu vào:
- Dòng đầu tiên gồm ba số nguyên ~N\ (1≤ N≤10^5)~, số thành phố, ~K\ (1≤K≤1000)~, số thành phố trong mỗi cụm và ~M\ (1≤M≤1000)~, số cụm thành phố;
- ~M~ dòng tiếp theo, mỗi dòng gồm ~K~ số nguyên là các thành phố trong cụm đó.

Các số trên một dòng của **Dữ liệu vào** được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả bài toán, nếu không có đường đi in ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
9 3 5
1 2 3
1 4 5
3 6 7
5 6 7
6 8 9
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
15 8 4
11 12 8 14 13 6 10 7
1 5 8 12 13 6 2 4
10 15 4 5 9 8 14 12
11 12 14 3 5 6 1 13
```

#### Dữ liệu ra:
```
3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)