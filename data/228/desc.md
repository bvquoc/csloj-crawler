Bạn biết được giá cố phiếu của hãng bất động sản HT trong ~n~ ngày liên tiếp, giá mua và bán trong ngày thứ ~i~ là ~a[i]~ trên một cổ phiếu. Trong một ngày bất kỳ, bạn được quyền lựa chọn một trong các phương án sau:
- Mua 1 cổ phiếu;
- Bán ra một số lượng cổ phiếu nào đó mà bạn có;
- Không mua và bán gì cả.

**Yêu cầu:** Bạn hãy mua và bán cổ phiếu sao cho lợi nhuận là tối đa?

## Dữ liệu vào:
- Dòng đầu chứa số test ~t\ (1≤t≤10)~. Mỗi test có dạng:
	- Dòng đầu tiên chứa số ~n\ (1≤n≤50000)~;
	- Dòng thứ hai chứa ~n~ số nguyên dương, số thứ ~i~ là giá mua và bán cổ phiếu trong ngày ~i\ (1≤a_i≤100000)~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là lợi nhuận tối đa thu được.

## Ví dụ:
#### Dữ liệu vào:
```
3
3
5 3 2
3
1 2 100
4
1 3 1 2
```

#### Dữ liệu ra:
```
0
197
3
```

#### Giải thích:
- Test ~1~: Không mua bán gì cả;
- Test ~2~:
	- Ngày ~1~ mua ~1~;
	- Ngày ~2~ mua ~1~;
	- Ngày ~3~ bán ~2~.
- Test ~3~:
	- Ngày ~1~: Mua ~1~;
	- Ngày ~2~: bán ~1~;
	- Ngày ~3~: Mua ~1~;
	- Ngày ~4~: bán ~1~;
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)