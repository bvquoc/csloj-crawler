**<center>Nguồn: Beginner Free Contest 3</center>**

Trong lúc buồn chán, Dũng đã tìm một xâu $s$ gồm $|s|$ kí tự là các chữ cái tiếng Anh in thường và đảo ngược một số xâu con **liên tiếp** của xâu $s$. Hãy viết chương trình tìm xâu $s$ sau khi Dũng thực hiện lần lượt $m$ lần đảo.

## Dữ liệu vào:
- Dòng đầu tiên gồm một xâu $s$ mà Dũng tìm được ban đầu $(2 ≤ |s| ≤ 2 × 10^5)$;
- Dòng thứ hai gồm một số nguyên $m$ $(1 ≤ m ≤ 10^5)$ là số lần Dũng đảo một xâu con liên tiếp của xâu $s$;
- Dòng thứ ba gồm $m$ số nguyên $a_i$ $(1 ≤ a_i ≤ \frac{|s|}{2})$, mỗi số mô tả lần đảo một xâu con liên tiếp từ kí tự thứ $a_i$ đến kí tự thứ $|s| − a_i + 1$ của Dũng. Các kí tự trong xâu $s$ được đánh số từ $1$ đến $|s|$.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa một xâu là xâu $s$ sau khi Dũng thực hiện lần lượt $m$ lần đảo.

## Ví dụ:
#### Dữ liệu vào:
```
kcchinbayble
4
2 2 2 2
```

## Dữ liệu ra:
```
kcchinbayble
```

#### Dữ liệu vào:
```
haideu
1
1
```

## Dữ liệu ra:
```
uediah
```

#### Giải thích:
- Ở ví dụ đầu tiên, Dũng đảo xâu con từ kí tự thứ $2$ đến kí tự thứ $11$ một số chẵn lần nên xâu không thay đổi.
- Ở ví dụ thứ hai, Dũng đảo cả xâu $s$ một lần.