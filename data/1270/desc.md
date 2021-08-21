Thành phố nọ gồm ~N~ ngôi làng và các ngôi làng được nối với nhau dạng cây, nghĩa là có ~N – 1~ con đường nối một số ngôi làng với nhau sao cho giữa ~2~ ngôi làng bất kì đều có một đường đi qua các con đường giữa chúng. Có ~K~ thành viên của đội tình nguyện đang ở ngôi làng trung tâm của thành phố và họ đang rất mệt mỏi sau một ngày làm việc. Bạn là tài xế, và bạn đang muốn chở họ về nhà nhanh nhất có thể. Bạn sẽ chở tất cả mọi người ở trên xe, đi tới từng nhà của từng người một. Có ~K~ người trong đội tình nguyện, nhà của họ đều nằm trong các làng, và không có ai cùng làng cả. Khi chở người cuối cùng tới nhà, bạn sẽ ở lại đó luôn qua đêm.

Tuy biết địa chỉ nhà của từng người, nhưng bạn phải quyết định xem thứ tự chở mọi người thế nào là nhanh nhất. Thêm vào đó, bạn không hề biết trung tâm thành phố ở đâu. Nhiệm vụ của bạn là với mỗi một thành phố, giả sử đó là trung tâm thành phố thì bạn cần ít nhất bao nhiêu thời gian để thực hiện lộ trình trên.

## Dữ liệu vào:
- Dòng đầu là số ~N~ và ~K~ là số làng và số người cần về nhà ~(1≤N≤5\times 10^5, 1≤K≤N)~;
- ~N – 1~ dòng sau mỗi dòng ghi ba số ~A, B, C~, nghĩa là có đường nối giữa làng ~A~ và làng ~B~ với thời gian đi qua là ~C~;
- ~K~ dòng tiếp theo, mỗi dòng ghi một số ~P~ là địa chỉ nhà của một người trong đội tình nguyện.

## Dữ liệu ra:
- Gồm ~N~ dòng, dòng thứ ~i~ là thời gian nhanh nhất của lộ trình nếu thành phố ~i~ là thành phố trung tâm.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
2 5 1
2 4 1
1 2 2
1 3 2
4
5
```

#### Dữ liệu ra:
```
5
3
7
2
2
```

## Giới hạn:
- ~20\%\text{ có }N≤2000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)