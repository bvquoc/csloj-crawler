- Vương quốc nọ có ~N~ lâu đài, và giữa chúng có ~M~ con đường nối với nhau. Biết rằng không có con đường nào nối một lâu đài với chính nó, và cũng không có cặp lâu đài nào nhiều hơn một đường nối giữa chúng.

Quốc vương muốn dạo chơi quanh ~N~ vương quốc này. Với mỗi lâu đài, quốc vương muốn đi thăm nó chẵn, hoặc lẻ lần. Biết được ý muốn của quốc vương, bạn hãy sắp xếp lộ trình cho quốc vương, sao cho thỏa mãn ý muốn của ngài. Tuy nhiên, lộ trình cũng không được quá dài, do kinh phí hạn hẹp, số lâu đài đi qua chỉ được phép không quá ~4×N~.

Chú ý rằng mỗi thành phố có thể đi qua nhiều lần. Trong bài toán này, bạn không phải in ra lộ trình cho quốc vương, đơn giản, bạn chỉ cần phải kiểm tra xem có tồn tại lịch trình như vậy hay không.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~T~ là số lượng test ~(1≤T≤10)~;
- Tiếp sau là ~T~ test, mỗi test bắt đầu bằng hai số nguyên dương ~N, M\ (1≤N,M≤10^5)~;
- Tiếp sau đó là ~M~ cặp số ~u, v~ thể hiện có đường nối giữa lâu đài ~u~ với lâu đài ~v~;
- Dòng tiếp theo trong mỗi test là ~N~ số nguyên ~0~ hoặc ~1~, có nghĩa là cần được thăm chẵn hay lẻ lần.

## Dữ liệu ra:
- Gồm ~T~ dòng là kết quả tương ứng với dữ liệu vào. In ra ~1~ nếu tồn tại đường đi và ~0~ nếu ngược lại.

## Ví dụ:
#### Dữ liệu vào:
```
2
3 2
1 2
2 3
1 1 1
5 7
1 2
1 3
1 4
1 5
3 4
3 5
4 5
0 1 0 1 0
```

###### Dữ liệu ra:
```
1
1
```

## Giới hạn:
- ~50\%~ số test có ~N≤16~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)